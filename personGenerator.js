const personGenerator = {
  surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
  firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
  firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елена",
            "id_3": "Валерия",
            "id_4": "Анастасия",
            "id_5": "Диана",
            "id_6": "Виктория",
            "id_7": "Анна",
            "id_8": "Евгения",
            "id_9": "Лариса",
            "id_10": "Надежда"
        }
    }`,

  GENDER_MALE: 'Мужчина',
  GENDER_FEMALE: 'Женщина',

  randomIntNumber: (max = 2000, min = 1970) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
    return obj.list[prop];
  },

  randomBirthYear: function () {
    return randomIntNumber(1980, 2000);
  },

  getPerson: function () {
    this.person = {};
    this.person.gender =
      Math.floor(Math.random() * 2) == 1
        ? this.GENDER_MALE
        : this.GENDER_FEMALE;

    if (this.person.gender == 'Мужчина') {
      this.person.firstName = this.randomValue(this.firstNameMaleJson);
      this.person.surName = this.randomValue(this.surnameJson);
      this.person.birthYear = this.randomIntNumber(this.birthYear) + ' г.р.';
    } else {
      this.person.firstName = this.randomValue(this.firstNameFemaleJson);
      this.person.surName = this.randomValue(this.surnameJson) + 'a';
      this.person.birthYear = this.randomIntNumber(this.birthYear) + ' г.р.';
    }
    return this.person;
  },
};
