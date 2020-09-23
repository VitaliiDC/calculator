export const didTouch = (value) => {
	if(!value) return 'Это поле обязательное';
	return undefined;
}
export const maxLength = (length) => (value) => {
	if(value){
		if(value.length >= length) return 'Слишком много символов';
		return undefined;
	}
}
