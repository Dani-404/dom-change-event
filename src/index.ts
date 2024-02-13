function createEvent(name: string, data: any): CustomEvent {
    const evt = new CustomEvent(name, {detail: data});
    return evt;
}

let test: HTMLElement

MutationObserver = window.MutationObserver || (window as any).WebKitMutationObserver;

const observer = new MutationObserver((mutations: MutationRecord[]) => {
    for(let i in mutations) {
        const mutation = mutations[i] as MutationRecord;
        
        switch(mutation.type) {
            case "childList": {
                if(mutation.addedNodes.length > 0) {
                    const event = createEvent("addedNodes", mutation.addedNodes);
                    mutation.target.dispatchEvent(event);
                }
                
                if(mutation.removedNodes.length > 0) {
                    const event = createEvent("removedNodes", mutation.removedNodes);
                    mutation.target.dispatchEvent(event);
                }
                
                break;
            }
            
            case "attributes": {						
                const event = createEvent("attributeChange", {attributeName: mutation.attributeName, oldValue: mutation.oldValue, target: mutation.target});
                mutation.target.dispatchEvent(event);
                break;
            }
        }
    }
});

export default function DomChangeEvent(): void {
    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
    });
}