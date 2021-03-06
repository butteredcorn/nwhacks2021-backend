import { CompleteOrder, CreateRestaurant, OrderResponse, PlaceOrderDb, Restaurant , PaidOrder } from '../types'
import { hash } from '../helpers/bcrypt'


const path = require('path')
require('dotenv').config()

class Database{
    private db;
    private admin;
    constructor(){
        this.admin = require("firebase-admin");

        var serviceAccount = require(path.join('../../',process.env.FIREBASE_CONFIG));
        

        this.admin.initializeApp({
          credential: this.admin.credential.cert(serviceAccount),
        });
        this.db = this.admin.firestore()
    }

    async getRestaurant(generatedId : string, returnPassword: boolean = false){
        const snapshot = await this.db.collection('restaurants').where('generatedId' , '==' , generatedId).limit(1).get();

        const items : Restaurant[] = []

        snapshot.forEach((doc : any) =>{
            const restaurant : Restaurant = doc.data()
            if (!returnPassword) delete restaurant.password
            items.push(restaurant)
        })

        return await Promise.all(items)
    }

    async createRestaurant(restaurant : CreateRestaurant){
        const password : string = await hash(restaurant.password)
        
        return this.db.collection('restaurants').add({
            ...restaurant,
            password
        })
    }

    async getOrder(id : string){
        return new Promise((resolve , reject) => {
            const result = this.db.collection('orders').doc(id).get();
            return result.then(snapshot => {
                resolve(snapshot.data())
            })
            .catch(reject)
        })       
    }

    async placeOrder(order: PlaceOrderDb) {
        const snapshot = await this.db
            .collection('restaurants')
            .where('generatedId', '==', order.restaurantId)
            .limit(1)
            .get()

        let refPath: string
        snapshot.forEach(doc => { refPath = doc.ref.path })

        const docRef = await this.db.collection('orders').add({
            isActive: true,
            isPaid: false,
            items: order.items,
            restaurant: this.db.doc(refPath),
            table: Number(order.tableId),
            time: this.admin.firestore.Timestamp.now(),
            total: order.items.reduce((acc, { price, quantity }) => Math.round((acc + (price * quantity) * 1.12) * 100) / 100, 0)
        })

        return docRef.id
    }

    async getOrders(restaurantId: string) {
        const snapshot = await this.db
            .collection('restaurants')
            .where('generatedId', '==', restaurantId)
            .limit(1)
            .get()

        let refPath: string
        snapshot.forEach(doc => { refPath = doc.ref.path })

        const orderSnapshot = await this.db
            .collection('orders')
            .where('restaurant', '==', this.db.doc(refPath))
            .get()

        let orders: OrderResponse[] = []
        orderSnapshot.forEach(doc => {
            const order = doc.data()
            delete order.restaurant
            order.time = order.time.toDate()
            order.orderId = doc.id
            orders.push(order)
        })

        return orders
    }

    async completeOrder(order: CompleteOrder) {
        const writeResult = await this.db
            .collection('orders')
            .doc(order.orderId)
            .update({ isActive: false })

        return writeResult.writeTime.toDate()
    }

    async paidOrder(order: PaidOrder) {
        const writeResult = await this.db
            .collection('orders')
            .doc(order.orderId)
            .update({ isPaid: true })

        return writeResult.writeTime.toDate()
    }
}

const db = new Database()
export default db



// getUsers(){
//     return this.db.collection('users').get()
//   }
//   addUser(user){
//     return this.db.collection("users").add({
//       ...user
//     })
//   }
//   getUser({id , email}){
//     return id ? this.db.collection("users").doc(id).get() : this.db.collection("users").where('email', '==', email).limit(1).get();
//   }
//   updateQuiz(id , user){
//     this.db.collection('users').doc(id).set(user , {merge : true})
//     .catch(e => console.log(e))
//   }
//   async getUserAllSwipes(id){
//     const user = await this.db.collection('users').doc(id)
//     // `users/${id}`
//     return this.db.collection('swipes').where('swiper' , '==' ,  user).get()
//   }
//   getUsersNewSwipe(gender){
//     // const user = await this.db.collection('users').doc(id).data()
//     return this.db.collection('users').where('gender' , 'in' , gender).limit(50).get()
//   }
//   addSwipe(swipe){
//     swipe.swipee = this.db.collection('users').doc(swipe.swipee)
//     swipe.swiper = this.db.collection('users').doc(swipe.swiper)
//     return this.db.collection('swipes').add({...swipe , timestamp : this.admin.firestore.FieldValue.serverTimestamp()})
//   }
//   async getSwipe({swiper , swipee}){
//     let swipe = {}
//     swipe.swipee = this.db.collection('users').doc(swipee.id)
//     swipe.swiper = this.db.collection('users').doc(swiper.id)
//     const data = await this.db.collection('swipes').where('swiper' , '==' , swipe.swiper).where('swipee' , '==', swipe.swipee).limit(1).get()
//     return data
//   }
//   async addMatch({swiper , swipee}){
//     const swiperSnapshot = await swiper.get()
//     const swipeeSnapshot = await swipee.get()
//     const swiperObj = await swiperSnapshot.data()
//     const swipeeObj = await swipeeSnapshot.data()
//     if(!swiperObj.matches){
//       swiperObj.matches = [] 
//     }
//     if(!swipeeObj.matches){
//       swipeeObj.matches = []
//     }
//     swiperObj.matches = [... await swiperObj.matches , swipee]
//     swipeeObj.matches = [... await swipeeObj.matches , swiper]
//     return Promise.all([this.db.collection('users').doc(swiper.id).update({matches : swiperObj.matches}),
//     this.db.collection('users').doc(swipee.id).update({matches : swipeeObj.matches})])
//   }
//   getUserAllMatches(user){
//     return new Promise(async (resolve,reject) => {
//       user  = await this.db.collection('users').doc(user.id).get()
//       user = await user.data()
//       if(user.matches){
//         const arrayOfSnapshots = []
//         user.matches.forEach(item => {
//           arrayOfSnapshots.push(item.get())
//         });
//         Promise.all(arrayOfSnapshots)
//         .then(results => resolve(results))
//         .catch(e => reject(e))
//       }else{
//         resolve([])
//       }
//     })
//   }