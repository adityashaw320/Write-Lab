const conf = {
     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
     appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
     appwriteDB: String(import.meta.env.VITE_DATABASE_ID),
     appwriteUrlTableId: String(import.meta.env.VITE_TABLE_ID),
     appwriteUrlBucketId: String(import.meta.env.BUCKET_ID),
}

export default conf