import { useState, useEffect } from "react";

const useValidation=(value,validations)=>{
    const [isEmpty,setIsEmpty]=useState(true);
    const [isEmailError,setInEmailError]=useState(false);
    const [inputValid,setInputValid]=useState(false);
    const [FIOError,setFIOError]=useState(false);
    const [ageError,setageError]=useState(false);
    const [phoneError,setphoneError]=useState(false);
    const [locationError,setlocationError]=useState(false);
    useEffect(()=>{
        for (const validation in validations) {
            switch(validation){
             case 'isEmpty':
                 value.isEmpty ? setIsEmpty(false) : setIsEmpty(true);
                 break;
             case 'isEmail':
                const re =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
                re.test(String(value).toLowerCase()) ? setInEmailError(false) : setInEmailError(true);
                break;
            case 'FIO':
                const rex1 =/^[а-яА-ЯёЁ]+ [а-яА-ЯёЁ]+ ?[а-яА-ЯёЁ]+$/;
                rex1.test(String(value).toLowerCase())? setFIOError(false) : setFIOError(true);
                break;
            case 'age':
                const rex2 =/^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/;
                rex2.test(String(value).toLowerCase())? setageError(false) : setageError(true);
                break;
            case 'phone':
                const rex3 =/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
                rex3.test(String(value).toLowerCase())? setphoneError(false) : setphoneError(true);
                break;
            case 'location':
                const rex4 =/[а-яА-ЯёЁ]/;
                rex4.test(String(value).toLowerCase())? setlocationError(false) : setlocationError(true);
                break
            }
         }
    },[value]);


    return {
        isEmpty,isEmailError,inputValid,FIOError,ageError,locationError,phoneError
    }
    
}

const useInput = (initionalValue,validations) => {
  const [value, setValue] = useState(initionalValue);
  const [isDirty, setIsDirty] = useState(false);
  const [formValue, setFormValue] = useState({})
  const valid =useValidation(value,validations)
  const onChange = (e) => {
    setValue(e.target.value);
   
    setFormValue(e.target.value);
  };
  const onBlur = (e) => {
    setIsDirty(true);
  };
  return { value, onChange, onBlur,formValue,isDirty,...valid };
};
export default useInput;