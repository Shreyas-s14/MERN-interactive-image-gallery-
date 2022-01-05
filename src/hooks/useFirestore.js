// to get the images from firebase and upload them intot he site
import { useState, useEffect } from "react";
import {proj} from "../firebase/config";

const useFirestore=(collection)=>
{
    const [docs, setDOCS]=useState([]);

    return {docs};
}