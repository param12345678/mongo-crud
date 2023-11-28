const swaggerAutogen = require("swagger-autogen")();
// import { swaggerAutogen } from "swagger-autogen";
const doc = {
    info: {
        version: "1.0.0",
        title: "Test API",
        description: "",
    },
    host: "localhost:4001",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            in: "header", // can be "header", "query" or "cookie"
            name: "token", // name of the header, query parameter or cookie
            description: "any description...",
        },
    },
    definitions: {
        Uploads: {},
        Pagination: {
            type: "object",
            properties: {
                size: { type: "number" },
                page: { type: "number" },
            },
        },
        Address: {
            $name: { type: "string" },
            $city: { type: "string" },
            $state: { type: "string" },
            $country: { type: "string" },
            $isManual: { type: "boolean" },
            $longitude: { type: "number" },
            $latitude: { type: "number" },
        },
        Register: {
            $email: "",
            $password: "",
            $username: "",
        },
        Login: {
            $email: "",
            $password: "",
        },
        Verify: {
            $authUserId: "",
            $otp: "",
            $role: "",
        },
        ResentOtp: {
            $userId: "",
        },
        ForgotPassword: {
            $email: "",
        },
        VerifyForgotPassword: {
            $token: "",
            $newPassword: "",
        },
        updatePassword: {
            type: "object",
            properties: {
                newPassword: { type: "string" },
                password: { type: "string" },
            },
        },
        updateProfile: {
            type: "object",
            properties: {
                userId: { type: "string" },
                name: { type: "string" },
                address: { type: "string" },
                dob: { type: "date" },
                profileUrl: { type: "string" },
            },
        },
        Statuschange: {
            type: "object",
            properties: {
                id: { type: "string" },
                status: { type: "boolean" },
                reason: { type: "string" },
            },
        },
        Createcategory: {
            type: "object",
            properties: {
                $name: "Category",
            },
        },
        Createproject: {
            type: "object",
            properties: {
                $title: "",
                $categoryId: "",
                $userId: "",
                $description: "",
                $amount: "",
                $websiteUrl: "",
                $facebookUrl: "",
                $instagramUrl: "",
                $twitterUrl: "",
                $linkedinUrl: "",
                $rewardTitle: "",
                $rewardDescription: "",
                $quantity: "",
                $estimatedDelivery: "",
                $documents: [],
                $bannerImage: "",
                $status: "",
                $duration: "",
            },
        },
        Updateproject: {
            type: "object",
            properties: {
                $id: "",
                $title: "",
                $categoryId: "",
                $userId: "",
                $description: "",
                $amount: "",
                $websiteUrl: "",
                $facebookUrl: "",
                $instagramUrl: "",
                $twitterUrl: "",
                $linkedinUrl: "",
                $rewardTitle: "",
                $rewardDescription: "",
                $quantity: "",
                $estimatedDelivery: "",
                $documents: [],
                $bannerImage: "",
                $status: "",
                $duration: "",
            },
        },
    },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes/index.js"];
swaggerAutogen(outputFile, endpointsFiles, doc);
