class OperationDto{
    id;
    concept;
    amount;
    date;
    type;

    constructor(id, concept, amount, date, type){
        this.id = id;
        this.concept = concept;
        this.amount = amount;
        this.date = date;
        this.type = type;
    }
}

module.exports = OperationDto;