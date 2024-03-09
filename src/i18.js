import i18n, { loadLanguages } from "i18next";
import Languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Languagedetector).use(initReactI18next).init({
    debug:true,
    lng: "hi",
    resources: {
        en: {
            translation:{
                title: "Unlimited movies, TV shows and more",
                subtitle1: "Watch anywhere. Cancel anytime.",
                subtitle2: "Ready to watch? Enter your email to create or restart your membership.",
                signIn: "Sign In",
                
            },

        },
        hi:{
            translation:{
                title: "असीमित फिल्में, टीवी शो और बहुत कुछ",
                subtitle1: "कहीं भी देखो, किसी भी समय रद्द करें।",
                subtitle2: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।",
                signIn:"साइन इन" ,

            },
            
        },
    },  
})
