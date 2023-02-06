import { Linq } from "linq-to-ts";
import StringHelper from "./StringHelper";

interface KeySearch<T> {
    Key: string,
    Value: T
}

export default class ArrayHelper {
    static IsNullOrEmpty<T>(list?: T[] | null) {
        return (list == undefined || list == null || list.length <= 0)
    }

    static IsLastItem<T>(list: T[], item: T) {
        return list.indexOf(item) == (list.length - 1);
    }

    /**
     * 
     * @param list list đầu vào
     * @param callback phương thức thực hiện
     */
    static async AsyncForEach<T>(list: T[], callback: (item: T, index: number, list: T[]) => Promise<void>) {
        for (var i = 0; i < list.length; i++) {
            await callback(list[i], i, list);
        }
    }

    static SearchListMultiField<T>(param: string, lstData: T[], listFieldKey: (keyof (T))[]) {
        if (param == undefined) {
            return lstData;
        }
        var lstForSearch = [] as KeySearch<T>[];

        lstData.forEach(item => {
            var key = '';
            listFieldKey.forEach(keyField => {
                if (item[keyField] != undefined) {
                    var valueField = StringHelper.CutSignOfVietNamese(item[keyField] as string).toLowerCase();
                    if (key == '') {
                        key = valueField
                    }
                    else {
                        key = key + '_' + valueField;
                    }
                }
            });
            var keySearch = {
                Key: key,
                Value: item
            } as KeySearch<T>;
            lstForSearch.push(keySearch);
        })
        var str = StringHelper.CutSignOfVietNamese(param).toLowerCase();
        var lstFilterByKey = new Linq(lstForSearch).Where(s => (s?.Key as string).includes(str)).ToArray();
        var lstFilter = [] as T[];
        if (!ArrayHelper.IsNullOrEmpty(lstFilterByKey)) {
            lstFilterByKey.forEach(item => {
                lstFilter.push(item.Value);
            });
        }
        return lstFilter;
    }

    static SearchList<T>(param: string, lstData: T[], fieldSearch: keyof (T)) {
        if (param == undefined) {
            return lstData;
        }
        var str = StringHelper.CutSignOfVietNamese(param).toLowerCase();
        var lstFilter = lstData.filter(s => StringHelper.CutSignOfVietNamese(s[fieldSearch] as string).toLowerCase().includes(str));
        return lstFilter;
    }
}