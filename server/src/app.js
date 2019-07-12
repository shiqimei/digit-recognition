const { spawn } = require('child_process');

const childPath = '../core/Recognizing/run_Recognize_Model.py';
const child = spawn('/usr/bin/python3', [childPath]);

process.stdin.pipe(child.stdin)

// Listeninig errors
child.stderr.on('data', err => {
    console.log(err.toString());
});

child.stdin.setEncoding = 'utf-8';
child.stdin.write(`iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAB6UlEQVRIS+2Vv8uxURjHvzdFGWQRRSlMBikbImVAKYvBZDX5kWQjykBC/gWRlYGFKFn9WCzKxmBQspDyvp1Tz1M8z3Pfnpf77e3tueos59zn+znX91zXfRgAv/AXg/kBvtrtf89Sk8mEfD4Pm80GqVRKEz4ej5jNZhgOh3Ttcrk8bARrhoFAAPV6HWKx+EvB/X6PSCSCRqPxEJQVuFgsYDQaUSwWkclkcDqdqKhAIIDL5UKlUoHBYKBzfr8f7XabE8oKPJ/PEIlEUKlU2G63H8SEQiEKhQISiQQGgwE9BFewAkejERwOB6rVKuLx+Kda6XQa2WyWrslkMhwOB1YmK5DYOZ/PwTAMotEoarXajZjb7Uav13ufSyaTKJVKfw4kO2OxGL2rtyBFQqpUo9F8EDabzZhOp88Bye5wOIxcLge5XH4jttls0O/3EQqFsNvtoFAouK4Q3258rVYLiUSC5XKJ6/UKvV6P1WqF9XoNnU73euC9os/nQ6fTASkwp9PJP/CtSkmvplIp/oGkKkkfklEul/kHNptNBINBOlqtFv/AbrcLj8cDr9d705Nfkb9dpfdCk8kEFosFdrsd4/GY/wxJSyiVSqjVas7fGjnN0xlarVb6ejyS3UuAnB7effB0hj/Aewf+f0t/A/AjuAFPujhSAAAAAElFTkSuQmCC`);
child.stdin.end();

const listener = async () => {
    for await (const data of child.stdout) {
        console.log(data.toString());
      };
};

listener();