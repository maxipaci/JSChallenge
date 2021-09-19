class Operation{
    id;
    concept;
    amount;
    date;
    typeId;

    constructor(id, concept, amount, date, typeId){
        this.id = id;
        this.concept = concept;
        this.amount = amount;
        this.date = date;
        this.typeId = typeId;
    }
}

module.exports = Operation;