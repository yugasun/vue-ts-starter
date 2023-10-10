import { message, type MessageArgsProps } from 'ant-design-vue';

export function toast(options: MessageArgsProps) {
    message.open(options);
}
