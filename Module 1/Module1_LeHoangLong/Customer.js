let Customer = function () {
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setCmnd = function (cmnd) {
        this.cmnd = cmnd;
    };
    this.getCmnd = function () {
        return this.cmnd;
    };
    this.setBirtyday = function (birthday) {
        this.birthday = birthday;
    };
    this.getBirthday = function (birthday) {
        return this.birthday;
    };
    this.setEmail = function (email) {
        this.email = email;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.setAddress = function (address) {
        this.address = address;
    };
    this.getAddress = function () {
        return this.address;
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    this.getTypeService = function () {
        return this.typeService;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.setQuantityIncluded = function (quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    };
    this.getQuantityIncluded = function () {
        return this.quantityIncluded;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;
    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.totalPays = function () {
        let money = 0;
        if (this.getTypeService() === "Villa") {
            money = 500;
        } else if (this.getTypeService() === "House") {
            money = 300;
        } else if (this.getTypeService() === "Room") {
            money = 200;
        }
        return this.getRentDays()*money*(1-this.getDiscount()/100);
    }
};