import { Alert } from "react-native";

enum QuestionButtonType {
    YES,
    NO
}

export default class AlertHelper {
    /**
     * Hiển thị thông báo trên màn hình
     * @param message Nội dung thông báo
     */
    static ShowMessage(message: string) {
        Alert.alert("Thông báo", message);
    }

    static ShowError(message: string) {
        Alert.alert("Thông báo lỗi", message);
    }

    /**
     * Hiển thị 1 thông báo câu hỏi trên màn hình có 2 lựa chọn
     * @param question Nội dung câu hỏi
     * @param okCaption Caption nút OK
     * @param cancelCaption Caption nút Cancel
     * @returns 
     */
    static async ShowQuestion(question: string, okCaption = "Đồng ý", cancelCaption = "Hủy") {
        const choice = await this.AsyncAlertHNC(question, okCaption, cancelCaption);
        if (choice === QuestionButtonType.YES) {
            return true;
        }
        else {
            return false;
        }
    }

    static AsyncAlertHNC = (str: string, okCap: string, cancelCap: string) => {
        return new Promise((resolve) => {
            Alert.alert(
                'Thông báo',
                str, [
                { text: okCap, onPress: () => resolve(QuestionButtonType.YES) },
                { text: cancelCap, onPress: () => resolve(QuestionButtonType.NO) }
            ],
                { cancelable: false }
            )
        })
    }
}