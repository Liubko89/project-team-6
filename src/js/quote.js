import iziToast from 'izitoast';
import axios from 'axios';
const BASE_URL = 'https://energyflow.b.goit.study/api';
const backendQuoteContainer = document.querySelector('.quote__backend');
//отримання цитати з сервера
async function getQuote() {
    backendQuoteContainer.innerHTML = `<span class="loader"></span>`;
    try {
        const response = await axios.get(`${BASE_URL}/quote`);
        return response.data;
    } catch (error) {
        iziToast.error({
            title: 'Wrong',
            message: 'Try again',
            position: 'topRight'
        });
        throw error;
    }
}
//html-розмітка
function createMarkup(author, quote) {
    return `<p class="quote__backend-text">${quote}</p>
    <p class="quote__backend-author">${author}</p>`;
}
//Функція для отримання нової цитати
async function fetchAndSaveQuote() {
    try {
        //отримання цитати з сервера
        const { author, quote } = await getQuote();
        //локальне сховище(створення об'єкту, збереження цитати та дати)
        const localStorageQuote = { author, quote, savedDate: new Date().toLocaleDateString() };
        localStorage.setItem('quote', JSON.stringify(localStorageQuote));
        localStorage.setItem('savedDate', localStorageQuote.savedDate);
        
        renderQuote(author, quote);
        
    } catch (error) {
        console.error(error);
    }
}

function renderQuote(author, quote) {
    backendQuoteContainer.innerHTML = createMarkup(author, quote);
}

// Функція для отримання і відображення цитати
async function getAndRenderQuote() {
    const savedQuote = JSON.parse(localStorage.getItem('quote'));
    const savedDate = localStorage.getItem('savedDate');
    const currentDate = new Date().toLocaleDateString();
    
    // Перевірка, чи цитата вже збережена для поточного дня
    if (savedQuote && savedDate === currentDate) {
        renderQuote(savedQuote.author, savedQuote.quote);
    } else {
        // Якщо цитата ще не збережена для поточного дня, отримуємо нову
        await fetchAndSaveQuote();
    }
}
getAndRenderQuote();
//функція для оновлення цитати кожного дня опівночі 
function setDailyQuoteUpdate() {
    const now = new Date();
    const timeUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) - now;
    setTimeout(function() {
        getAndRenderQuote();
        setDailyQuoteUpdate();
    }, timeUntilMidnight);
}
setDailyQuoteUpdate();
