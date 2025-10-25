import conf from "../conf.js";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  tableDB;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.tableDB = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ titel, slug, featuredImage, status, content, userId }) {
    try {
      return await this.tableDB.createRow({
        databaseId: conf.appwriteDB,
        tableId: conf.appwriteTableId,
        rowId: ID.unique(),

        data: {
          slug,
          titel,
          featuredImage,
          status,
          content,
          userId,
        },
      });
    } catch (error) {
      console.log("Appwrite Service :: Create Post :: Error", error);
    }
  }

  async updatePost(ID, { titel, featuredImage, status, content }) {
    try {
      await this.tableDB.updateRow({
        databaseId: conf.appwriteDB,
        tableId: conf.appwriteTableId,
        rowId: ID.unique(),

        data: {
          titel,
          featuredImage,
          status,
          content,
        },
      });
    } catch (error) {
      console.log("Appwrite Service :: Create Post :: Error", error);
    }
  }

  async deletePost(rowId) {
    try {
      await this.tableDB.deleteRow({
        databaseId: conf.appwriteDB,
        tableId: conf.appwriteTableId,
        rowId: rowId,
      });
      return true;
    } catch (error) {
      console.log("Appwrite Service :: Delete Post :: Error", error);
    }
    return false;
  }

  async getPost(rowId) {
    try {
      return await this.tableDB.getRow({
        databaseId: conf.appwriteDB,
        tableId: conf.appwriteTableId,
        rowId: rowId,
      });
    } catch (error) {
      console.log("AppWrite Service :: Delete Post :: Error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.tableDB.listRows({
        databaseId: conf.appwriteDB,
        tableId: conf.appwriteTableId,
        queries,
      });
    } catch (error) {
        console.log("Appwrite service :: Get Post :: Error", error);
        return false
    }
  }

        // {File upload service}

  async uploadFile(file){
    try {
        await this.bucket.createFile({
            bucketId: appwriteBucketId,
            fileId: ID.unique(),
            file                      // file input object (from <input type="file" />)
        })
    } catch (error) {
        console.log("Appwrite service :: uploadFile :: Error", error);
        return false
    }
  }

  async deleteFile(){
    try {
        await this.bucket.deleteFile({})
    } catch (error) {
        
    }
  }
}

const service = new Service();

export default service;
