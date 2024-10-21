const hebrewLayout = {
  default: [
    // "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
    "{bksp}",
    // "{tab} / ' ק ר א ט ו ן ם פ [ ] \\",
    "/ ' ק ר א ט ו ן ם פ [ ] \\",
    "ש ד ג כ ע י ח ל ך ף '",
    //"{lock} ש ד ג כ ע י ח ל ך ף ' {enter}",
    "{shift} / ז ס ב ה נ מ צ ת ץ . {shift}",
    // ".com @ {space}",
    "{space}",
  ],
  shift: [
    "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
    '/ " ק ר א ט ו ן ם פ ( ) |',
    "ש ד ג כ ע י ח ל ך ף '",
    "{shift} / ז ס ב ה נ מ צ ת ץ , {shift}",
    ".com @ {space}",
  ],
};

export default hebrewLayout;
