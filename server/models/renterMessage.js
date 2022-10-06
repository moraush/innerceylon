import mongoose from "mongoose";

const renterSchema = mongoose.Schema({



    
        property:String,
        propertyType: String,
        amentities:{
            
        },
        address:String,
        latlng:{

        },
        price:String,
    creator: String,
    createdAt:{
        type:Date,
        default: new Date()
    },
    name:String,
    creatorImage: String,

    
});

const RenterMessage = mongoose.model('RenterMessage', renterSchema);

export default RenterMessage;
