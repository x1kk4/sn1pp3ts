input_file = open(r'helpers/insert', 'r+', encoding='utf-8')
output_file = open(r'helpers/output', 'w+', encoding='utf-8')

output_file.write('[\n')

lines = input_file.readlines()

for i, line in enumerate(lines):
    outputLine = '  "' + line.replace('\n', '') + '"'
    if i != len(lines) - 1:
        outputLine += ','

    outputLine += '\n'
    output_file.write(outputLine)

output_file.write(']')

input_file.truncate(0)

input_file.close()
output_file.close()

