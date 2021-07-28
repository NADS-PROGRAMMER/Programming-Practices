export default class Student {

    #firstName;
    #middleName;
    #lastName;
    #birthday;
    #email;
    #country;
    #course;
    #address;

    constructor(firstName, middleName, lastName, birthday) {

        this.#firstName = firstName;
        this.#middleName = middleName;
        this.#lastName = lastName;
        this.#birthday = birthday;
    }

    // Getters and Setters
    set setEmail(email) {

        this.#email = email;
    }

    set setCountry (country) {

        this.#country = country;
    }

    set setCourse (course) {

        this.#course = course;
    }

    set setAddress (address) {

        this.#address = address;
    }

    get getFirstName() {

        return this.#firstName;
    }

    get getMiddleName() {

        return this.#middleName;
    }

    get getLastName() {

        return this.#lastName;
    }
}
