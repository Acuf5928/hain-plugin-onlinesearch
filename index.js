'use strict';

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }
        res.add({
            id: query_trim,
            payload: 'bing',
            title: 'Search on bing',
			icon: "#fa fa-bold",
            desc: 'Search on bing'
        });

        res.add({
            id: query_trim,
            payload: 'bing1', 
            title: 'Search on bing images',
			icon: "#fa fa-bold",
            desc: 'Search on bing images'
        });

        res.add({
            id: query_trim,
            payload: 'google',
            title: 'Search on google',
            icon: "#fa fa-google",
            desc: 'Search on google'
        });

         res.add({
            id: query_trim,
            payload: 'google1',
            title: 'Search on google images',
            icon: "#fa fa-google",
            desc: 'Search on google images'
        });
    }

    function execute(id, payload) {
        if (payload == 'bing') {
            shell.openExternal(`http://www.bing.com/search?q=${id}`);
            return;
        }
         if (payload == 'bing1') {
            shell.openExternal(`http://www.bing.com/images/search?q=${id}`);
            return;
        }
         if (payload == 'google') {
            shell.openExternal(`https://www.google.it/?gws_rd=ssl#q=${id}`);
            return;
        }
         if (payload == 'google1') {
            shell.openExternal(`https://www.google.it/search?q=${id}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj4vra_y_HSAhVDxxQKHZQsAxIQ_AUICCgB&biw=1000&bih=685#spf=1`);
            return;
        }

    }

    return {search, execute};
};