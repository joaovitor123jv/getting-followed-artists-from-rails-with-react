
export const Pages = {
	HOME_PAGE: 1,
	LOGIN_PAGE: 2
}

export function parsePageName(page){
	switch(page){
		case Pages.HOME_PAGE:
			return "Home Page";
		case Pages.LOGIN_PAGE:
			return "Login Page";
		default:
			return "404 - NOT FOUND"
	}
}