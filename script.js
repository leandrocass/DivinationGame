@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root {
  font-size: 62.5%;

  --main-text-color: hsl(240, 27%, 28%);
  --text-color: hsl(240, 27%, 28%, 0.8);
  --input-bg-color: hsl(212, 23%, 89%);
  --button-bg-color: hsl(262, 52%, 47%);
  --button-bg-color-hover: hsl(262, 52%, 59%);
  --bg-color-main: hsl(0, 0%, 100%);
  --bg-color: linear-gradient(287.56deg, hsl(199, 88%, 87%) 0%, hsl(217, 96%, 81%) 100%);

  --font-regular: 400;
  --font-semi-bold: 600;
  --font-bold: 700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-size: 1.6rem;
}

body {
  background: var(--bg-color);
  display: grid;
  place-items: center;
  height: calc(100vh - 1.2rem);
}

body,
p,
input,
button {
  font-family: 'DM Sans', sans-serif;
}

main {
  padding: 4.8rem 6.4rem 6.4rem;
  border-radius: 0.6rem;
  background-color: var(--bg-color-main);
  width: min(90%, 42.8rem);
  filter: drop-shadow(hsl(0, 0%, 0%, 10%) 0 0.2rem 0.4rem);
}

.screen1 {
  text-align: center;
}

h1 {
  font-weight: var(--font-semi-bold);
  font-size: 2.4rem;
  color: var(--main-text-color);
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 1.6rem;
}

p {
  color: var(--text-color);
  font-weight: var(--font-regular);
  margin-bottom: 4.8rem;
}

form {
  display: flex;
  justify-content: center;
}

input {
  background-color: var(--input-bg-color);
  width: 6.5rem;
  border-radius: 0.4rem 0 0 0.4rem;
}

button {
  background-color: var(--button-bg-color);
  color: var(--bg-color-main);
  cursor: pointer;
  border-radius: 0 0.4rem 0.4rem 0;
  &:hover {
    background-color: var(--button-bg-color-hover);
  }

  &.play-again-button {
    border-radius: 0.4rem;
  }
}

input,
button {
  border: none;
  padding: 1.6rem;
  font-weight: var(--font-bold);
}

.screen2 {
  text-align: center;
}

.screen2 p {
  font-size: 2.4rem;
  font-weight: var(--font-regular);
}

.hide {
    display: none;
}
