const conf = {
     appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
     appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
     appwriteDB:String(import.meta.env.VITE_DATABASE_ID),
     appwriteTableId:String(import.meta.env.VITE_TABLE_ID),
     appwriteBucketId:String(import.meta.env.BUCKET_ID),
}

export default conf