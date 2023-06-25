// Adding elements:
elements.Cryotheum = {
    color: "#57d2ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 10,
    state: "liquid",
    density: 1200,
    temp: -273,
};
elements.Basalz = {
    color: "#240d04",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 10000000,
    state: "liquid",
    density: 2500,
    temp: 3090,
    reactions: {
		"water": { elem1: "Cryotheum", elem2: "Baslaz" },
	}
};
