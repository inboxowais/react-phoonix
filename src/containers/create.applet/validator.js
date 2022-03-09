import { regex } from 'components/utils/regex';

export function isValidCreateApplet(data){
    const isValidName = regex.isNotEmpty.test(data.name);
    const isValidDescription = regex.isNotEmpty.test(data.description);
    const isValidChannel = regex.isNotEmpty.test(data.channel);
    const isValidCategories = data.categories.length === 0 ? false : true;
    const isValidKeyWords =data.keywords.length === 0 ? false : true;
    // const isValidImage = regex.isNotEmpty.test(data.files);
 

    return {
        isValidName,
        isValidDescription,
        isValidChannel,
        isValidCategories,
        isValidKeyWords,
        // isValidImage,
        allValid: isValidName && isValidDescription  && isValidCategories && isValidKeyWords 
    }
}
