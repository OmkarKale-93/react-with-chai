import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // call another method
                return this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }
    
    async login({email, password}){
        try {
            await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.account.get()
            return user
            } catch (error) {
                console.log("Appwrite service :: getCurrentUse:: error",error)
            }
            return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions('current');
        } catch (error) {
            console.log("appwrite service :: logout",error);
        }
    }
}

const authService = new AuthService();

export default authService;