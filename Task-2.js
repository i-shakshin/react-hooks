import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("componentWillUnmount()");
    };
  });

  // Без параметров
  useEffect(() => {
    // выполнится на каждый рендер
    console.log("componentDidUpdate()");
  });

  // Пустой массив
  useEffect(() => {
    // Выполнится только на первый рендер
    console.log("componentDidMount()");
  }, []);

  // Массив зависимостей
  useEffect(() => {
    // Выполнится  на первый рендер
    // И на любые изменение зависимостей - здесь переменные props и state
    console.log("componentDidMount() + componentDidUpdate()");
  }, [prop, state]);

  return <h1>I've rendered {count} times!</h1>;
}
