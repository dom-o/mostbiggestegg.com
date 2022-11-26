import sys,pathlib,re
from datetime import date

def main():
    with open(f'_drafts/{sys.argv[1]}.html', 'x') as f:
        pass

    ord = 0
    with open(f'{pathlib.Path().resolve()}/src/pagelist.yaml','r+') as f:
        for line in f:
            if re.fullmatch("\s+ord: [0-9]+\s",line):
                i= int(re.search('[0-9]+',line).group())
                ord = i if i>ord else ord
        ord+=1
        f.write(
            f'\n- title: {sys.argv[1].replace("-"," ")}\n'+
            f'  path: {sys.argv[1]}\n'+
            f'  date: {date.today()}\n'+
            f'  ord: {ord}\n'
        )

    with open(f'_drafts/{sys.argv[1]}.html', 'w') as f:
        str=    '---\n'
        str+=   'layout: templates/post.njk\n'
        str+=   'sidebar: true\n'
        str+=   f'ord: {ord}\n'
        str+=   '---\n'

        f.write(str)

if __name__ == '__main__':
    main()
