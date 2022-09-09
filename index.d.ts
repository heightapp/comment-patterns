declare const commentPattern: ((filename: string) => {
  name: string;
  nameMatchers: Array<string>;
  multiLineComment?: [
    {
      start: RegExp | string;
      middle?: RegExp | string;
      end: RegExp | string;
      apidoc?: true;
    }
  ];
  singleLineComment?: [
    {
      start: RegExp | string;
    }
  ];
}) & {
  regex: (filename: string) => {
    regex: RegExp;
    cg: {
      indent: number;
      wholeComment: number;
      contentStart: number;
    };
    middle: Array<RegExp | null>;
    name: string;
    info: [
      {
        type: "multiline";
        apidoc?: true;
      },
      {
        type: "singleline";
      }
    ];
  };
  allPatterns: () => {
    name: string;
    nameMatchers: Array<string>;
    multiLineComment?: [
      {
        start: RegExp | string;
        middle?: RegExp | string;
        end: RegExp | string;
        apidoc?: true;
      }
    ];
    singleLineComment?: [
      {
        start: RegExp | string;
      }
    ];
  };
};

export default commentPattern;
