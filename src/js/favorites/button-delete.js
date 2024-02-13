export default function getRemovButton(rating, url, _id) {
    return `<div><button data-id="${_id}" class="favorites-button-remove" type="button">
    <svg data-id="${_id}" class="favorites-icon-trash">
    <use href="${url}#icon-trash-favotites"></use>
  </svg>
    </button></div>`;
  }