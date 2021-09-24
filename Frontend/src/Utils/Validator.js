export class Validator{
    static isValidAmount(amount){
        return !isNaN(amount) && amount > 0;
    }


    static isValidConcept(concept){
        return concept.length > 0 && concept.length < 500;
    }
}