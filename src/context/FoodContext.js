import {
  collection,
  onSnapshot,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { db } from "../firebase";
import FoodReducer from "./FoodReducer";

// const INITIAL_STATE = {
//   foods: [],
//   isLoading: false,
// };

// export const FoodContext = createContext(INITIAL_STATE);
const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data without async await
  // useEffect(() => {
  //   const unsub = onSnapshot(
  //     collection(db, "foods"),
  //     (snapShot) => {
  //       let list = [];
  //       snapShot.docs.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       // state.foods = [...list];
  //       console.log('1st',list);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   return () => {
  //     unsub();
  //   };
  // }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const listingRef = collection(db, "foods");
        const q = query(listingRef);
        const querySnap = await getDocs(q);

        const foodData = [];
        querySnap.docs.forEach((doc) => {
          return foodData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setFoods(foodData);
        setLoading(false);
      } catch (error) {
        console.log("Could not fetch listing");
      }
    };

    return () => {
      fetchFoods();
    };
  }, []);

  return (
    <FoodContext.Provider
      value={{ foods: foods, loading: loading }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const FoodContextApi = () => {
  return useContext(FoodContext);
};
