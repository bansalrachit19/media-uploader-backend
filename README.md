# Media Uploader

This project is a file upload service built using **Node.js**, **Express.js**, **MongoDB**, and **Cloudinary**. It supports uploading images and videos to Cloudinary, as well as storing metadata in MongoDB. Additionally, it provides functionality for local file uploads.

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- A Cloudinary account

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd FILEUPLOAD
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=4000
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.wlsiw.mongodb.net/<database-name>

   CLOUD_NAME=<your-cloudinary-cloud-name>
   API_KEY=<your-cloudinary-api-key>
   API_SECRET=<your-cloudinary-api-secret>
   ```

4. **Start MongoDB**
   Make sure your MongoDB server is running locally or via a cloud provider.

5. **Start the Server**
   ```bash
   npm run dev
   ```
   The server will start on the configured port (default: 4000).

## Project Structure

```
file-upload-service/
├── controllers/
│   ├── imageUpload.js
│   ├── videoUpload.js
│   ├── localFileUpload.js
├── models/
│   └── File.js
├── routes/
│   └── fileUpload.js
├── config/
│   ├── cloudinary.js
│   └── dbConnect.js
├── .env
├── index.js
├── package.json
└── README.md
```

## Features

### 1. Image Upload
Endpoint: `/api/v1/upload/imageUpload`
- Uploads an image file to Cloudinary.
- Validates supported file types (`jpeg`, `jpg`, `png`).
- Stores file metadata in MongoDB.

### 2. Video Upload
Endpoint: `/api/v1/upload/videoUpload`
- Uploads a video file to Cloudinary.
- Validates supported file types (`mp4`, `mpv`).
- Stores file metadata in MongoDB.

### 3. Local File Upload
Endpoint: `/api/v1/upload/localFileUpload`
- Uploads a file to a local directory on the server.

## API Routes

| Method | Endpoint                  | Description                |
|--------|---------------------------|----------------------------|
| POST   | `/api/v1/upload/imageUpload` | Uploads an image file.     |
| POST   | `/api/v1/upload/videoUpload` | Uploads a video file.      |
| POST   | `/api/v1/upload/localFileUpload` | Uploads a file locally.    |

## Configuration Files

### 1. **cloudinary.js**
Handles Cloudinary configuration and connection.

### 2. **dbConnect.js**
Handles MongoDB connection setup.

## Models

### File.js
Defines the schema for storing file metadata:
```javascript
const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    }
});

module.exports = mongoose.model("fileSchema", fileSchema);
```

## How to Test

1. Use **Postman** or any API testing tool.
2. Send POST requests to the appropriate endpoints with required file and metadata.
3. Check the responses for success or error messages.
4. Verify file uploads in Cloudinary or local directory as applicable.

## Error Handling

- Returns proper status codes and error messages for validation and upload failures.
- Logs errors for debugging purposes.

## Future Enhancements

- Add file compression before upload.
- Implement user authentication and authorization.
- Add support for more file types.
- Enhance the UI for testing and interaction.

## Contributing

Feel free to submit a pull request or open an issue if you find any bugs or have feature suggestions.
