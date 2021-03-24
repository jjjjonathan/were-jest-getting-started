const caesar = require("./caesar");

test("all lowercase", () => {
  expect(caesar("attack at dawn")).toBe("nggnpx ng qnja");
});

test("mix of lowercase and upper", () => {
  expect(caesar("Lets roll")).toBe("Yrgf ebyy");
});

test("LONG UPPERCASE STRING ETC ETC", () => {
  expect(
    caesar(
      "SOMEBODY ONCE TOLD ME THE WORLD IS GONNA ROLL ME I AINT THE SHARPEST TOOL IN THE SHED SHE WAS LOOKIN KINDA DUMB WITH HER FINGER AND HER THUMB IN THE SHAPE OF AN L ON HER FOREHEAD"
    )
  ).toBe(
    "FBZROBQL BAPR GBYQ ZR GUR JBEYQ VF TBAAN EBYY ZR V NVAG GUR FUNECRFG GBBY VA GUR FURQ FUR JNF YBBXVA XVAQN QHZO JVGU URE SVATRE NAQ URE GUHZO VA GUR FUNCR BS NA Y BA URE SBERURNQ"
  );
});
