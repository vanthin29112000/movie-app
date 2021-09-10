import { notification } from "antd";

const notify = {
   openNotification: () => {
      notification.open({
         message: "Notification Title",
         description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
         onClick: () => {
            console.log("Notification Clicked!");
         },
      });
   },
};

export default notify;
