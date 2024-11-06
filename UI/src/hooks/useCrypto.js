import CryptoJS from "crypto-js/aes"
import utf8 from "crypto-js/enc-utf8"

const secretKey = "MIf3f6ElXb"

export const encrypt = text => CryptoJS.encrypt(text,secretKey) 

   

export const decrypt = text =>{
  
    const bytes = CryptoJS.decrypt(text ,secretKey)

    return bytes.toString(utf8)
}

export const login = (password, savedPassword) =>{

    console.log('password, savedPassword :>> ', password, savedPassword);
    
    return password === decrypt(savedPassword)
} 

