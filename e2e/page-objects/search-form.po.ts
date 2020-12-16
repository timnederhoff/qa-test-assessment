import { $ } from 'protractor';

export class SearchFormPo {
    input = $('#query');
    searchBtn = $('button');
    firstCharacterName = $('app-character h6');
    selectSearchType = (searchType: string) => {
        let searchTypeId: string;
        switch (searchType.toUpperCase().trim()) {
            case 'PERSON': searchTypeId = 'people'; break;
            case 'PLANET': searchTypeId = 'planets'; break;
        }
        return $(`input#${searchTypeId}`).click();
    }
}
