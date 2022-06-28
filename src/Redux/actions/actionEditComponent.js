import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import { typesEditProduct } from "../types/types";

export const editProductAsync = newProduct => {
  return async dispatch => {
    const collectionProduct = collection(dataBase, "InfoUser");
    const q = query(
      collectionProduct,
      where("headline", "==", newProduct.headline)
    );
    const datosQ = await getDocs(q);
    let id = "";

    datosQ.forEach(async docu => {
      id = docu.id;
    });

    console.log(id);

    const docRef = doc(dataBase, "InfoUser", id);

    await updateDoc(docRef, newProduct)
      .then(resp => {
        dispatch(editProductSync(newProduct));
      })
      .catch(error => console.log(error));
  };
};

export const editProductSync = newProduct => {
  return {
    type: typesEditProduct.edit,
    payload: { newProduct },
  };
};
