var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "631",
                            "DialogWidth": "811"
                        },
                        "/General": {
                            "coverByNetwork": "true",
                            "darkTheme": "org.kde.oxygenlight",
                            "radiusCardCustom": "1",
                            "sizeGeneralIcons": "22",
                            "sizeMarginlIcons": "8"
                        },
                        "/Weather": {
                            "selectedMetrics": "Wind Speed,Feels Like,UV Level,Rain,Max/Min,Sunrise / Sunset",
                            "windUnit": "mph"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "Plasma.Flex.Hub",
                    "title": "Flex Hub"
                },
                {
                    "config": {
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.mediacontroller",
                    "title": "Media Player"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1280x720": "Applet-27:865.571,16,352,368,0;Applet-37:533.917,264.323,352,464,0;",
                    "ItemGeometries-1600x900": "Applet-27:1152,16,352,368,0;Applet-37:1152,400,352,464,0;",
                    "ItemGeometries-2133x1200": "Applet-51:1632,32,384,384,0;Applet-37:1632,464,384,464,0;",
                    "ItemGeometries-3200x1800": "Applet-27:1152,16,352,368,0;Applet-37:1152,400,352,464,0;",
                    "ItemGeometriesHorizontal": "Applet-51:1632,32,384,384,0;Applet-37:1632,464,384,464,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "630",
                    "DialogWidth": "810"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/krinkyroot/Downloads/wallhaven-m965vm.jpg",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "525",
                            "popupWidth": "699"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "/home/krinkyroot/Downloads/500px-Arch_Linux__Crystal__icon.svg.png",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "fontWeight": "400"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "launchers": "applications:kitty.desktop,applications:firefox.desktop,applications:org.strawberrymusicplayer.strawberry.desktop,applications:code.desktop,applications:org.kde.dolphin.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "432",
                            "popupWidth": "325"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "360",
                            "popupWidth": "470"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "365",
                            "popupWidth": "361"
                        }
                    },
                    "plugin": "org.kde.plasma.battery"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Shortcuts": {
                    "global": "Shift, Shift"
                }
            },
            "height": 3.4444444444444446,
            "hiding": "normal",
            "lengthMode": "fit",
            "location": "left",
            "maximumLength": 66.66666666666667,
            "minimumLength": 66.66666666666667,
            "offset": 0,
            "opacity": "adaptive"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
