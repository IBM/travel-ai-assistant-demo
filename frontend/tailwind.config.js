/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ["class"],
    content: [
    "./**/*.{js,ts,jsx,tsx}", // Include all matching files
    "!./node_modules/**", // Exclude everything in node_modules
  ],
  //...
    plugins: [require("tailwindcss-animate")],
    corePlugins: { preflight: false },
    theme: {
      extend: {
        fontFamily: {
          sans: [
            'IBM Plex Sans',
            'system-ui',
            'ui-sans-serif',
            'sans-serif'
          ]
        },
        colors: {
          cds: {
            background: {
              DEFAULT: 'var(--cds-background)',
              active: 'var(--cds-background-active)',
              brand: 'var(--cds-background-brand)',
              hover: 'var(--cds-background-hover)',
              inverse: {
                DEFAULT: 'var(--cds-background-inverse)',
                hover: 'var(--cds-background-inverse-hover)'
              },
              selected: {
                DEFAULT: 'var(--cds-background-selected)',
                hover: 'var(--cds-background-selected-hover)'
              }
            },
            button: {
              primary: {
                DEFAULT: 'var(--cds-button-primary)',
                hover: 'var(--cds-button-primary-hover)',
                active: 'var(--cds-button-primary-active)'
              },
              secondary: {
                DEFAULT: 'var(--cds-button-secondary)',
                hover: 'var(--cds-button-secondary-hover)',
                active: 'var(--cds-button-secondary-active)'
              },
              danger: {
                DEFAULT: 'var(--cds-button-danger-primary)',
                hover: 'var(--cds-button-danger-hover)',
                active: 'var(--cds-button-danger-active)',
                secondary: 'var(--cds-button-danger-secondary)'
              },
              tertiary: {
                DEFAULT: 'var(--cds-button-tertiary)',
                hover: 'var(--cds-button-tertiary-hover)',
                active: 'var(--cds-button-tertiary-active)'
              },
              disabled: 'var(--cds-button-disabled)',
              separator: 'var(--cds-button-separator)'
            },
            link: {
              primary: {
                DEFAULT: 'var(--cds-link-primary)',
                hover: 'var(--cds-link-primary-hover)'
              },
              secondary: 'var(--cds-link-secondary)',
              visited: 'var(--cds-link-visited)',
              inverse: {
                DEFAULT: 'var(--cds-link-inverse)',
                hover: 'var(--cds-link-inverse-hover)',
                active: 'var(--cds-link-inverse-active)',
                visited: 'var(--cds-link-inverse-visited)'
              }
            },
            field: {
              DEFAULT: 'var(--cds-field)',
              hover: {
                DEFAULT: 'var(--cds-field-hover)',
                '01': 'var(--cds-field-hover-01)',
                '02': 'var(--cds-field-hover-02)',
                '03': 'var(--cds-field-hover-03)'
              },
              '01': 'var(--cds-field-01)',
              '02': 'var(--cds-field-02)',
              '03': 'var(--cds-field-03)'
            },
            text: {
              'on-color': {
                DEFAULT: 'var(--cds-text-on-color)',
                disabled: 'var(--cds-text-on-color-disabled)'
              },
              inverse: 'var(--cds-text-inverse)',
              primary: 'var(--cds-text-primary)',
              secondary: 'var(--cds-text-secondary)',
              disabled: 'var(--cds-text-disabled)',
              error: 'var(--cds-text-error)',
              helper: 'var(--cds-text-helper)',
              placeholder: 'var(--cds-text-placeholder)'
            },
            focus: {
              DEFAULT: 'var(--cds-focus)',
              inset: 'var(--cds-focus-inset)',
              inverse: 'var(--cds-focus-inverse)'
            },
            border: {
              strong: {
                '01': 'var(--cds-border-strong-01)',
                '02': 'var(--cds-border-strong-02)',
                '03': 'var(--cds-border-strong-03)',
                DEFAULT: 'var(--cds-border-strong)'
              },
              tile: {
                '01': 'var(--cds-border-tile-01)',
                '02': 'var(--cds-border-tile-02)',
                '03': 'var(--cds-border-tile-03)',
                DEFAULT: 'var(--cds-border-tile)'
              },
              subtle: {
                '00': 'var(--cds-border-subtle-00)',
                '01': 'var(--cds-border-subtle-01)',
                '02': 'var(--cds-border-subtle-02)',
                '03': 'var(--cds-border-subtle-03)',
                DEFAULT: 'var(--cds-border-subtle)',
                selected: {
                  '01': 'var(--cds-border-subtle-selected-01)',
                  '02': 'var(--cds-border-subtle-selected-02)',
                  '03': 'var(--cds-border-subtle-selected-03)',
                  DEFAULT: 'var(--cds-border-subtle-selected)'
                }
              },
              disabled: 'var(--cds-border-disabled)',
              interactive: 'var(--cds-border-interactive)',
              inverse: 'var(--cds-border-inverse)'
            },
            layer: {
              DEFAULT: 'var(--cds-layer)',
              '01': 'var(--cds-layer-01)',
              '02': 'var(--cds-layer-02)',
              '03': 'var(--cds-layer-03)',
              accent: {
                DEFAULT: 'var(--cds-layer-accent)',
                '01': 'var(--cds-layer-accent-01)',
                '02': 'var(--cds-layer-accent-02)',
                '03': 'var(--cds-layer-accent-03)',
                active: {
                  DEFAULT: 'var(--cds-layer-accent-active)',
                  '01': 'var(--cds-layer-accent-active-01)',
                  '02': 'var(--cds-layer-accent-active-02)',
                  '03': 'var(--cds-layer-accent-active-03)'
                },
                hover: {
                  DEFAULT: 'var(--cds-layer-accent-hover)',
                  '01': 'var(--cds-layer-accent-hover-01)',
                  '02': 'var(--cds-layer-accent-hover-02)',
                  '03': 'var(--cds-layer-accent-hover-03)'
                }
              },
              active: {
                DEFAULT: 'var(--cds-layer-active)',
                '01': 'var(--cds-layer-active-01)',
                '02': 'var(--cds-layer-active-02)',
                '03': 'var(--cds-layer-active-03)'
              },
              hover: {
                DEFAULT: 'var(--cds-layer-hover)',
                '01': 'var(--cds-layer-hover-01)',
                '02': 'var(--cds-layer-hover-02)',
                '03': 'var(--cds-layer-hover-03)'
              },
              selected: {
                DEFAULT: 'var(--cds-layer-selected)',
                '01': 'var(--cds-layer-selected-01)',
                '02': 'var(--cds-layer-selected-02)',
                '03': 'var(--cds-layer-selected-03)',
                disabled: 'var(--cds-layer-selected-disabled)',
                hover: {
                  DEFAULT: 'var(--cds-layer-selected-hover)',
                  '01': 'var(--cds-layer-selected-hover-01)',
                  '02': 'var(--cds-layer-selected-hover-02)',
                  '03': 'var(--cds-layer-selected-hover-03)'
                },
                inverse: 'var(--cds-layer-selected-inverse)'
              }
            },
            ai: {
              aura: {
                start: 'var(--cds-ai-aura-start)',
                startSm: 'var(--cds-ai-aura-start-sm)',
                end: 'var(--cds-ai-aura-end)',
                hover: {
                  background: 'var(--cds-ai-aura-hover-background)',
                  start: 'var(--cds-ai-aura-hover-start)',
                  end: 'var(--cds-ai-aura-hover-end)'
                }
              },
              border: {
                strong: 'var(--cds-ai-border-strong)',
                start: 'var(--cds-ai-border-start)',
                end: 'var(--cds-ai-border-end)'
              },
              'drop-shadow': 'var(--cds-ai-drop-shadow)',
              'inner-shadow': 'var(--cds-ai-inner-shadow)',
              overlay: 'var(--cds-ai-overlay)',
              popover: {
                background: 'var(--cds-ai-popover-background)',
                caret: {
                  bottom: {
                    DEFAULT: 'var(--cds-ai-popover-caret-bottom)',
                    background: {
                      DEFAULT: 'var(--cds-ai-popover-caret-bottom-background)',
                      actions: 'var(--cds-ai-popover-caret-bottom-background-actions)'
                    }
                  },
                  center: 'var(--cds-ai-popover-caret-center)'
                },
                shadow: {
                  outer: {
                    '01': 'var(--cds-ai-popover-shadow-outer-01)',
                    '02': 'var(--cds-ai-popover-shadow-outer-02)'
                  }
                }
              },
              skeleton: {
                background: 'var(--cds-ai-skeleton-background)',
                'element-background': 'var(--cds-ai-skeleton-element-background)'
              }
            },
            chat: {
              avatar: {
                agent: 'var(--cds-chat-avatar-agent)',
                bot: 'var(--cds-chat-avatar-bot)',
                user: 'var(--cds-chat-avatar-user)'
              },
              bubble: {
                agent: 'var(--cds-chat-bubble-agent)',
                border: 'var(--cds-chat-bubble-border)',
                user: 'var(--cds-chat-bubble-user)'
              },
              button: {
                DEFAULT: 'var(--cds-chat-button)',
                active: 'var(--cds-chat-button-active)',
                hover: 'var(--cds-chat-button-hover)',
                selected: 'var(--cds-chat-button-selected)',
                'text-hover': 'var(--cds-chat-button-text-hover)',
                'text-selected': 'var(--cds-chat-button-text-selected)'
              },
              header: 'var(--cds-chat-header-background)',
              prompt: {
                background: 'var(--cds-chat-prompt-background)',
                border: {
                  end: 'var(--cds-chat-prompt-border-end)',
                  start: 'var(--cds-chat-prompt-border-start)'
                }
              },
              shell: 'var(--cds-chat-shell-background)'
            },
            highlight: 'var(--cds-highlight)',
            icon: {
              DEFAULT: 'var(--cds-icon-primary)',
              secondary: 'var(--cds-icon-secondary)',
              interactive: 'var(--cds-icon-interactive)',
              disabled: 'var(--cds-icon-disabled)',
              inverse: 'var(--cds-icon-inverse)',
              'on-color': {
                DEFAULT: 'var(--cds-icon-on-color)',
                disabled: 'var(--cds-icon-on-color-disabled)'
              },
              primary: 'var(--cds-icon-primary)'
            },
            interactive: 'var(--cds-interactive)',
            overlay: 'var(--cds-overlay)',
            shadow: 'var(--cds-shadow)',
            skeleton: {
              background: 'var(--cds-skeleton-background)',
              element: 'var(--cds-skeleton-element)'
            },
            support: {
              caution: {
                major: 'var(--cds-support-caution-major)',
                minor: 'var(--cds-support-caution-minor)',
                undefined: 'var(--cds-support-caution-undefined)'
              },
              error: {
                DEFAULT: 'var(--cds-support-error)',
                inverse: 'var(--cds-support-error-inverse)'
              },
              info: {
                DEFAULT: 'var(--cds-support-info)',
                inverse: 'var(--cds-support-info-inverse)'
              },
              success: {
                DEFAULT: 'var(--cds-support-success)',
                inverse: 'var(--cds-support-success-inverse)'
              },
              warning: {
                DEFAULT: 'var(--cds-support-warning)',
                inverse: 'var(--cds-support-warning-inverse)'
              }
            },
            toggle: {
              off: 'var(--cds-toggle-off)'
            },
            notification: {
              background: {
                error: 'var(--cds-notification-background-error)',
                success: 'var(--cds-notification-background-success)',
                info: 'var(--cds-notification-background-info)',
                warning: 'var(--cds-notification-background-warning)'
              },
              action: {
                hover: 'var(--cds-notification-action-hover)',
                'tertiary-inverse': {
                  DEFAULT: 'var(--cds-notification-action-tertiary-inverse)',
                  active: 'var(--cds-notification-action-tertiary-inverse-active)',
                  hover: 'var(--cds-notification-action-tertiary-inverse-hover)',
                  text: 'var(--cds-notification-action-tertiary-inverse-text)',
                  'text-on-color-disabled': 'var(--cds-notification-action-tertiary-inverse-text-on-color-disabled)'
                }
              }
            },
            tag: {
              background: {
                red: 'var(--cds-tag-background-red)',
                magenta: 'var(--cds-tag-background-magenta)',
                purple: 'var(--cds-tag-background-purple)',
                blue: 'var(--cds-tag-background-blue)',
                cyan: 'var(--cds-tag-background-cyan)',
                teal: 'var(--cds-tag-background-teal)',
                green: 'var(--cds-tag-background-green)',
                gray: 'var(--cds-tag-background-gray)',
                'cool-gray': 'var(--cds-tag-background-cool-gray)',
                'warm-gray': 'var(--cds-tag-background-warm-gray)'
              },
              color: {
                red: 'var(--cds-tag-color-red)',
                magenta: 'var(--cds-tag-color-magenta)',
                purple: 'var(--cds-tag-color-purple)',
                blue: 'var(--cds-tag-color-blue)',
                cyan: 'var(--cds-tag-color-cyan)',
                teal: 'var(--cds-tag-color-teal)',
                green: 'var(--cds-tag-color-green)',
                gray: 'var(--cds-tag-color-gray)',
                'cool-gray': 'var(--cds-tag-color-cool-gray)',
                'warm-gray': 'var(--cds-tag-color-warm-gray)'
              },
              hover: {
                red: 'var(--cds-tag-hover-red)',
                magenta: 'var(--cds-tag-hover-magenta)',
                purple: 'var(--cds-tag-hover-purple)',
                blue: 'var(--cds-tag-hover-blue)',
                cyan: 'var(--cds-tag-hover-cyan)',
                teal: 'var(--cds-tag-hover-teal)',
                green: 'var(--cds-tag-hover-green)',
                gray: 'var(--cds-tag-hover-gray)',
                'cool-gray': 'var(--cds-tag-hover-cool-gray)',
                'warm-gray': 'var(--cds-tag-hover-warm-gray)'
              },
              border: {
                red: 'var(--cds-tag-border-red)',
                magenta: 'var(--cds-tag-border-magenta)',
                purple: 'var(--cds-tag-border-purple)',
                blue: 'var(--cds-tag-border-blue)',
                cyan: 'var(--cds-tag-border-cyan)',
                teal: 'var(--cds-tag-border-teal)',
                green: 'var(--cds-tag-border-green)',
                gray: 'var(--cds-tag-border-gray)',
                'cool-gray': 'var(--cds-tag-border-cool-gray)',
                'warm-gray': 'var(--cds-tag-border-warm-gray)'
              }
            },
            yellow: {
              '10': '#fcf4d6',
              '20': '#fddc69',
              '30': '#f1c21b',
              '40': '#d2a106',
              '50': '#b28600',
              '60': '#8e6a00',
              '70': '#684e00',
              '80': '#483700',
              '90': '#302400',
              '100': '#1c1500',
              hover: {
                '10': '#f8e6a0',
                '20': '#fccd27',
                '30': '#ddb00e',
                '40': '#bc9005',
                '50': '#9e7700',
                '60': '#755800',
                '70': '#806000',
                '80': '#5c4600',
                '90': '#3d2e00',
                '100': '#332600'
              }
            },
            orange: {
              '10': '#fff2e8',
              '20': '#ffd9be',
              '30': '#ffb784',
              '40': '#ff832b',
              '50': '#eb6200',
              '60': '#ba4e00',
              '70': '#8a3800',
              '80': '#5e2900',
              '90': '#3e1a00',
              '100': '#231000',
              hover: {
                '10': '#ffe2cc',
                '20': '#ffc69e',
                '30': '#ff9d57',
                '40': '#fa6800',
                '50': '#cc5500',
                '60': '#9e4200',
                '70': '#a84400',
                '80': '#753300',
                '90': '#522200',
                '100': '#421e00'
              }
            },
            red: {
              '10': '#fff1f1',
              '20': '#ffd7d9',
              '30': '#ffb3b8',
              '40': '#ff8389',
              '50': '#fa4d56',
              '60': '#da1e28',
              '70': '#a2191f',
              '80': '#750e13',
              '90': '#520408',
              '100': '#2d0709',
              hover: {
                '10': '#ffe0e0',
                '20': '#ffc2c5',
                '30': '#ff99a0',
                '40': '#ff6168',
                '50': '#ee0713',
                '60': '#b81922',
                '70': '#c21e25',
                '80': '#921118',
                '90': '#66050a',
                '100': '#540d11'
              }
            },
            magenta: {
              '10': '#fff0f7',
              '20': '#ffd6e8',
              '30': '#ffafd2',
              '40': '#ff7eb6',
              '50': '#ee5396',
              '60': '#d02670',
              '70': '#9f1853',
              '80': '#740937',
              '90': '#510224',
              '100': '#2a0a18',
              hover: {
                '10': '#ffe0ef',
                '20': '#ffbdda',
                '30': '#ff94c3',
                '40': '#ff57a0',
                '50': '#e3176f',
                '60': '#b0215f',
                '70': '#bf1d63',
                '80': '#8e0b43',
                '90': '#68032e',
                '100': '#53142f'
              }
            },
            purple: {
              '10': '#f6f2ff',
              '20': '#e8daff',
              '30': '#d4bbff',
              '40': '#be95ff',
              '50': '#a56eff',
              '60': '#8a3ffc',
              '70': '#6929c4',
              '80': '#491d8b',
              '90': '#31135e',
              '100': '#1c0f30',
              hover: {
                '10': '#ede5ff',
                '20': '#dcc7ff',
                '30': '#c5a3ff',
                '40': '#ae7aff',
                '50': '#9352ff',
                '60': '#7822fb',
                '70': '#7c3dd6',
                '80': '#5b24ad',
                '90': '#40197b',
                '100': '#341c59'
              }
            },
            blue: {
              '10': '#edf5ff',
              '20': '#d0e2ff',
              '30': '#a6c8ff',
              '40': '#78a9ff',
              '50': '#4589ff',
              '60': '#0f62fe',
              '70': '#0043ce',
              '80': '#002d9c',
              '90': '#001d6c',
              '100': '#001141',
              hover: {
                '10': '#dbebff',
                '20': '#b8d3ff',
                '30': '#8ab6ff',
                '40': '#5c97ff',
                '50': '#1f70ff',
                '60': '#0050e6',
                '70': '#0053ff',
                '80': '#0039c7',
                '90': '#00258a',
                '100': '#001f75'
              }
            },
            cyan: {
              '10': '#e5f6ff',
              '20': '#bae6ff',
              '30': '#82cfff',
              '40': '#33b1ff',
              '50': '#1192e8',
              '60': '#0072c3',
              '70': '#00539a',
              '80': '#003a6d',
              '90': '#012749',
              '100': '#061727',
              hover: {
                '10': '#cceeff',
                '20': '#99daff',
                '30': '#57beff',
                '40': '#059fff',
                '50': '#0f7ec8',
                '60': '#005fa3',
                '70': '#0066bd',
                '80': '#00498a',
                '90': '#013360',
                '100': '#0b2947'
              }
            },
            teal: {
              '10': '#d9fbfb',
              '20': '#9ef0f0',
              '30': '#3ddbd9',
              '40': '#08bdba',
              '50': '#009d9a',
              '60': '#007d79',
              '70': '#005d5d',
              '80': '#004144',
              '90': '#022b30',
              '100': '#081a1c',
              hover: {
                '10': '#acf6f6',
                '20': '#57e5e5',
                '30': '#25cac8',
                '40': '#07aba9',
                '50': '#008a87',
                '60': '#006b68',
                '70': '#007070',
                '80': '#005357',
                '90': '#033940',
                '100': '#0f3034'
              }
            },
            green: {
              '10': '#defbe6',
              '20': '#a7f0ba',
              '30': '#6fdc8c',
              '40': '#42be65',
              '50': '#24a148',
              '60': '#198038',
              '70': '#0e6027',
              '80': '#044317',
              '90': '#022d0d',
              '100': '#071908',
              hover: {
                '10': '#b6f6c8',
                '20': '#74e792',
                '30': '#36ce5e',
                '40': '#3bab5a',
                '50': '#208e3f',
                '60': '#166f31',
                '70': '#11742f',
                '80': '#05521c',
                '90': '#033b11',
                '100': '#0d300f'
              }
            },
            coolGray: {
              '10': '#f2f4f8',
              '20': '#dde1e6',
              '30': '#c1c7cd',
              '40': '#a2a9b0',
              '50': '#878d96',
              '60': '#697077',
              '70': '#4d5358',
              '80': '#343a3f',
              '90': '#21272a',
              '100': '#121619',
              hover: {
                '10': '#e4e9f1',
                '20': '#cdd3da',
                '30': '#adb5bd',
                '40': '#9199a1',
                '50': '#757b85',
                '60': '#585e64',
                '70': '#5d646a',
                '80': '#434a51',
                '90': '#2b3236',
                '100': '#222a2f'
              }
            },
            gray: {
              '10': '#f4f4f4',
              '20': '#e0e0e0',
              '30': '#c6c6c6',
              '40': '#a8a8a8',
              '50': '#8d8d8d',
              '60': '#6f6f6f',
              '70': '#525252',
              '80': '#393939',
              '90': '#262626',
              '100': '#161616',
              hover: {
                '10': '#e8e8e8',
                '20': '#d1d1d1',
                '30': '#b5b5b5',
                '40': '#999999',
                '50': '#7a7a7a',
                '60': '#5e5e5e',
                '70': '#636363',
                '80': '#474747',
                '90': '#333333',
                '100': '#292929'
              }
            },
            warmGray: {
              '10': '#f7f3f2',
              '20': '#e5e0df',
              '30': '#cac5c4',
              '40': '#ada8a8',
              '50': '#8f8b8b',
              '60': '#726e6e',
              '70': '#565151',
              '80': '#3c3838',
              '90': '#272525',
              '100': '#171414',
              hover: {
                '10': '#f0e8e6',
                '20': '#d8d0cf',
                '30': '#b9b3b1',
                '40': '#9c9696',
                '50': '#7f7b7b',
                '60': '#605d5d',
                '70': '#696363',
                '80': '#4c4848',
                '90': '#343232',
                '100': '#2c2626'
              }
            },
            black: {
              DEFAULT: '#000000',
              hover: '#212121'
            },
            white: {
              DEFAULT: '#ffffff',
              hover: '#e8e8e8'
            }
          }
        }
      }
    }
};
module.exports = config;

