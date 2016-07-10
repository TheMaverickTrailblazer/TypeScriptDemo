module TSDemo {
    export class Printer {
        static WriteInConole(text: string) {
            console.log(`*** ${text} ***`);
        }
        static print(text: string, includeTimestamp: boolean = false) {
            let ts = "",
                today = new Date();
            if (includeTimestamp)
                ts = `[${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:${today.getMilliseconds()}]:`;

            let formattedText = `<br />
                    ${ts}
                    ${text}`;

            this.updateDocument(formattedText);
            this.WriteInConole(text);
        }

        static setTitle(text: string) {
            this.updateDocument(`<H2> ${text} </H2>`);
        }

        static updateDocument(text: string) {
            let el = document.getElementById('content');
            el.innerHTML += text;

        }

        static printNext(text: string, includeTimestamp: boolean = false) {
            text = `--------------<br\>${text}`;
            this.print(text, includeTimestamp);
        }
    }
}