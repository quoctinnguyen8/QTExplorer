document.addEventListener('alpine:init', () => {
	Alpine.data('qtexplorer', () => ({
		_setting: {
			baseUrl: '/filemanager/getalldir',
			ajaxParam: {
				cmd: '',
				value: '',
				secondaryValue: ''
			}
		},
		_folderTree: [
			{
				fullPath: '',
				level: 1,
				folderName: '',
				isShow: true,
				cssClass: {}
			}

		],

		init() {
			fetch(this._setting.baseUrl)
				.then(res => res.json())
				.then(json => {
					console.log(json);
					this._folderTree = json.map(path => {
						// tách chuỗi thành mảng, dựa theo dấu \
						var tmpArr = path.split("\\");
						return {
							folderName: tmpArr[tmpArr.length - 1],	// Phần tử cuối
							fullPath: path,
							level: tmpArr.length,
							isShow: false,
							cssClass: {
								[`folder-level-${tmpArr.length}`]: true,
								show: false
							}
						}
					});
					console.log(this._folderTree);
				});
		}


	}));
});


