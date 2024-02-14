// Switch method

const averageGrade = 82.5
let NotificationBe;

switch (true) {
    case averageGrade < 60:
        NotificationBe = "Unsatisfied";
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        NotificationBe = "Satisfied";
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        NotificationBe = "Good";
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        NotificationBe = "Very Good";
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        NotificationBe = "Excellent";
        break;
    default:
        NotificationBe = "Error";
}

console.log(NotificationBe);
