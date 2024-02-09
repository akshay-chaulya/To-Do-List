import icons from "url:../../img/icons.svg";
import View from "./view";

class PaginationView extends View {
    _parentEl = document.querySelector('.pagenation');

    addHandlerRender(handler) {
        this._parentEl.addEventListener("click", function (e) {
            const btn = e.target.closest(".secondary-button");
            if (!btn) return;
            const goTo = btn.dataset.goTo;
            handler(+goTo);
        })
    }

    _generateMarkup() {
        const curPage = this._data.curPage;
        const numPage = Math.ceil(this._data.tasks.length / this._data.taskPerPage)
        if (curPage === 1 && numPage > 1) return this._gegenerateMarkupNextBtn(curPage);
        if (curPage > 1 && numPage > curPage) return this._gegenerateMarkupPreBtn(curPage) + this._gegenerateMarkupNextBtn(curPage);
        if (curPage > 1 && numPage === curPage) return this._gegenerateMarkupPreBtn(curPage);
        return '';
    }

    _gegenerateMarkupPreBtn(curPage) {
        return `
                <button data-go-to="${curPage - 1}" class="secondary-button left-0">
                    <svg class="h-5 w-5 fill-white">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>`;
    }

    _gegenerateMarkupNextBtn(curPage) {
        return `
                <button data-go-to="${curPage + 1}" class="secondary-button right-0">
                    <span>Page ${curPage + 1}</span>
                    <svg class="h-5 w-5 fill-white">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>`;
    }
}

export default new PaginationView();