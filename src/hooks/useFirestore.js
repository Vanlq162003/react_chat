import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'

const useFirestore = (collection , condition) => {
    const [doccuments, setDoccuments] = useState([])
    useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createAt')

        if(condition){
            if(!condition.compareValue || !condition.compareValue.length){
                setDoccuments([])
                return
            }
            collectionRef = collectionRef.where(condition.fieldName , condition.operator , condition.compareValue)
        }

        const unsubcribe =  collectionRef.onSnapshot((snapshot)=>{
            const doccuments = snapshot.docs.map(doc=>({
                ...doc.data(),
                id: doc.id
            }))
            setDoccuments(doccuments)
        })
        return unsubcribe
          
        },[collection, condition])

        return doccuments
  
}

export default useFirestore