
export const INITIAL_STATE={
    name     :"",  
    seriesName :"",

    displayImg :"", 

    desktopImgs :"", 

    mobileImgs   :"", 

    level           :"",

    type            :"",
    
    seriesName      : "",

    difficultyLevel :"",

    challengeType   :"",

    challengenum    :0,
    points          :0,

    skillsRequired  :[],
}

export const challengeReducer=(state, action)=>{

    switch(action.type){
        case "CHANGE_INPUT":

            return{
                ...state,[action.payload.name]:action.payload.value
            }

        case "ADD_SKILL":
            return{
                ...state,
                 skillsRequired:[...state.skillsRequired, action.payload]
            }  
        case "REMOVE_SKILL":
            return{
                ...state,
                 skillsRequired: state.skillsRequired.filter(skill => skill !== action.payload)
            }   
        case "ADD_IMAGES":
            return{
                ...state,
                    displayImg: action.payload.displayImg,
                    desktopImgs: action.payload.desktopImgs,
                    mobileImgs: action.payload.mobileImgs
                } 
        default:
            return state;    
    }

}