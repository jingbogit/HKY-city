// 发送事件，详细信息可以包含在detail中

function request (detail) {
    // Listen for the event.
    var event1 = new CustomEvent('3d_element_request', { 'detail': detail });
    
    // target can be any Element or other EventTarget.
    document.dispatchEvent(event1)
}