// задача 1
function parseCount(number) {
    let parseNumberInt = Number.parseInt(number);
    if (Number.isNaN(parseNumberInt)) {
        throw new Error("Невалидное значение");
    } else {
        return parseNumberInt;
    }
}

function validateCount(val) {
    try {
        return parseCount(val);
    } catch (error) {
        return error;
    }
}

// задача 2
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        let semiPerimetr = this.getPerimeter() / 2;
        let area = Math.sqrt(semiPerimetr * (semiPerimetr - this.sideA) * (semiPerimetr - this.sideB) * (semiPerimetr - this.sideC));
        return +area.toFixed(3);
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        let wrongFigure = {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
        return wrongFigure;
    }
}