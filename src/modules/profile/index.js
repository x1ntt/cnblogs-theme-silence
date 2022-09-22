import "./index.less";
import options from '@/consts/options';

function buildProfile() {
    const avatar = options.avatar;
    const avatar_dark = options.avatar_dark;
    const favicon = options.favicon;
    const hour = new Date().getHours();
    const modeKey = `silence-mode-${currentBlogApp}`;
    const modeLoading = sessionStorage.getItem(modeKey) || (options.defaultMode == 'auto' ? (hour >= 6 && hour < 18 ? 'light' : 'dark') : options.defaultMode);
    if (modeLoading == "light"){
        $('#sideBarMain').prepend(`<img class="esa-profile-avatar" src="${avatar}" />`);
    }else{
	if (avatar_dark)
	    $('#sideBarMain').prepend(`<img class="esa-profile-avatar" src="${avatar_dark}" />`);
    };
    if (favicon) {
        $('#favicon').attr('href', favicon);
    }
}

export default buildProfile;
