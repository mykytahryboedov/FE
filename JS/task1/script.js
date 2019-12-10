function *fibonacciGenerator(mode, n, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }
  yield current;
  if (mode) {
    yield *fibonacciGenerator(true, n-1, next, current + next);
  } else {
    yield *fibonacciGenerator(false, n-1, next, current - next);
  }
}

function displayFibonacci() {
    let mode = confirm('Нажмите "Ок" для положительного ряда, "Отмена" для отрицательного ряда.');
    let fibonacci = fibonacciGenerator(mode);
    do {
        let portion = Number(prompt('Сколько чисел вы хотите увидеть?'));
        for (; portion > 0; portion--) {
        console.log(fibonacci.next());
        }
    } while (confirm('Хотите увидеть больше?'));
    if (confirm('Перезапустить генератор?')) {
        displayFibonacci();
    } else {
        alert('Может быть еще один тест?'); }
}

displayFibonacci();

